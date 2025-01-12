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

export async function updateCurrentUser(updateFields) {
  const { data: session, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError || !session?.session) {
    console.log("No session found or an error occurred.");
    return null;
  }

  const userId = session.session.user.id;

  // Update only the provided fields in Supabase
  const { data: updatedUser, error: updateError } = await supabase
    .from("user")
    .update(updateFields)
    .eq("id", userId)
    .select()
    .single(); // Fetch the updated user data directly

  if (updateError) {
    throw new Error(updateError.message);
  }

  return { user: updatedUser };
}
