import { supabase } from "../_utils/supabase";

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
  const { data: session, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError || !session?.session) {
    console.log("No session found or an error occurred.");
    return null;
  }

  const userId = session.session.user.id;
  // Fetch user data from your custom "user" table
  const { data, error } = await supabase
    .from("user")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    console.error("Error fetching user data:", error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({
  fname,
  lname,
  vipStatus,
  notificationsOrders,
  notificationsOffers,
  streetAddress,
  city,
  county,
  postalCode,
  country,
}) {
  const { data: session, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError || !session?.session) {
    console.log("No session found or an error occurred.");
    return null;
  }

  const userId = session.session.user.id;

  // Fetch the current user data
  const { data: currentUserData, error: fetchError } = await supabase
    .from("user") // Replace "user" with your table name
    .select("*")
    .eq("id", userId)
    .single();

  if (fetchError) {
    throw new Error(fetchError.message);
  }

  // Merge the current data with the updated fields
  const updateData = {
    ...currentUserData,
    ...(fname !== undefined && { fname }),
    ...(lname !== undefined && { lname }),
    ...(vipStatus !== undefined && { vipStatus }),
    ...(notificationsOrders !== undefined && { notificationsOrders }),
    ...(notificationsOffers !== undefined && { notificationsOffers }),
    ...(streetAddress !== undefined && { streetAddress }),
    ...(city !== undefined && { city }),
    ...(county !== undefined && { county }),
    ...(postalCode !== undefined && { postalCode }),
    ...(country !== undefined && { country }),
  };

  // Update the user data in Supabase
  const { data: updatedUser, error: updateError } = await supabase
    .from("user")
    .update(updateData)
    .eq("id", userId)
    .select();

  if (updateError) {
    throw new Error(updateError.message);
  }

  // Return the updated user data
  return { user: updatedUser[0] };
}
