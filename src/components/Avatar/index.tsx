import React from "react";
import { useAppContext } from "../../hooks/useAppContext";

export const Avatar = () => {

  const context = useAppContext();

  if (!context.user) {
    return <h1>Loading 🥺 ...</h1>
  }

  return(
    <div
      style={{
        display: 'flex'
      }}
    >
      <img 
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
        }}
        src={context.user?.img} 
        alt="avatar" 
      />
      <h2>{context.user?.name}</h2>
    </div>
  )
}