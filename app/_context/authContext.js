"use client";
import React, { useEffect, useState, createContext, useContext } from "react";
import { supabase } from "../_utils/supabase";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  useEffect(function () {
    // Listen for auth state changes
    var { data: subscription } = supabase.auth.onAuthStateChange(function (
      event,
      session
    ) {
      console.log("Auth state changed:", event, session);
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
    AuthContext.Provider,
    { value: { user } },
    props.children
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
