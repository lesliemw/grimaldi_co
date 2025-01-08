"use client";
import React, { useEffect, useState, createContext, useContext } from "react";
import { supabase } from "../_utils/supabase";
import { useUser } from "../_api/useUser";
import { getCurrentUser } from "../_api/apiAuth";

const UserContext = createContext();

function UserProvider(props) {
  const [user, setUser] = useState(null);
  const { data } = getCurrentUser();

  useEffect(function () {
    // Listen for auth state changes
    const { data: subscription } = supabase.auth.onAuthStateChange(function (
      event,
      session
    ) {
      setUser(session ? session.user : null);
    });

    // Check for existing session on mount
    supabase.auth.getSession().then(function (response) {
      if (response.data.session) {
        setUser(response.data.session.user);
      }
    });

    return function cleanup() {
      subscription.unsubscribe();
    };
  }, []);

  return React.createElement(
    UserContext.Provider,
    { value: { user } },
    props.children
  );
}

function useAuth() {
  return useContext(UserContext);
}

export { UserProvider, useAuth };
