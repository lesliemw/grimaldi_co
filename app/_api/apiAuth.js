import { supabase } from "../_utils/supabase";

export async function createUserFromAuth(userId) {
  try {
    // Fetch the user's details from auth.users
    const { data: authUser, error: authError } = await supabase
      .from("auth.users")
      .select("id, email, created_at, user_metadata")
      .eq("id", userId)
      .single();

    if (authError) {
      throw new Error(`Failed to fetch auth user: ${authError.message}`);
    }

    // Extract fname and lname from user_metadata
    const { fname, lname } = authUser.user_metadata || {};

    // Insert the user into the user table
    const { data: user, error: userError } = await supabase
      .from("user")
      .insert({
        id: authUser.id,
        email: authUser.email,
        created_at: authUser.created_at,
        fname,
        lname,
      });

    if (userError) {
      throw new Error(`Failed to create user: ${userError.message}`);
    }

    return user;
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
}

export async function signup({ fname, lname, email, password }) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          fname,
          lname,
        },
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    // Automatically create the user in the custom user table
    await createUserFromAuth(data.user.id);

    return data;
  } catch (error) {
    console.error("Signup failed:", error.message);
    throw error;
  }
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}
export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({
  password,
  fname,
  lname,
  vipStatus,
  notificationsOrders,
  streetAddress,
  city,
  county,
  postalCode,
  country,
}) {
  //1. Update data
  let updateData;
  if (password) updateData = { password };
  if (fname) updateData = { data: { fname } };
  if (lname) updateData = { data: { lname } };
  if (vipStatus) updateData = { data: { vipStatus } };
  if (notificationsOrders) updateData = { data: { notificationsOrders } };
  if (streetAddress) updateData = { data: { streetAddress } };
  if (city) updateData = { data: { city } };
  if (county) updateData = { data: { county } };
  if (postalCode) updateData = { data: { postalCode } };
  if (country) updateData = { data: { country } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  return updatedUser;
}
