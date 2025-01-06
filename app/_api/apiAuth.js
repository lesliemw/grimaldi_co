import { supabase } from "../_utils/supabase";

export async function createUserFromAuth(user) {
  try {
    // Ensure the required fields are available
    const { id, email, created_at, user_metadata } = user;

    if (!id || !email) {
      throw new Error("Missing required user fields (id or email).");
    }

    // Extract additional data from user_metadata
    const { fname, lname } = user_metadata || {};

    // Insert the user into the custom "user" table
    const { data: insertedUser, error: userError } = await supabase
      .from("user")
      .insert({
        id,
        email,
        created_at,
        fname,
        lname,
      })
      .select();

    if (userError) {
      console.error("Insert error details:", userError);
      throw new Error(`Failed to create user: ${userError.message}`);
    }

    return insertedUser;
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
}

export async function signup({ fname, lname, email, password }) {
  try {
    // Sign up the user with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          fname,
          lname,
        },
      },
    });

    if (authError) {
      throw new Error(`Auth error: ${authError.message}`);
    }

    // Ensure the user was created successfully
    const user = authData?.user;
    if (!user) {
      throw new Error("User creation failed.");
    }

    // Insert user profile into the `user` table
    const { id, created_at } = user; // Extract data from the created auth user
    const { error: dbError } = await supabase.from("user").insert({
      id,
      email,
      fname,
      lname,
      created_at,
    });

    if (dbError) {
      throw new Error(`Database error: ${dbError.message}`);
    }

    return user; // Return the created user data
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
