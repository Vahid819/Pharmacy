import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Avtar() {
  return (

    <Avatar className={"bg-transparent"}>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>

  );
}

export default Avtar;
