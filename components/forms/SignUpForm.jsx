/*<div className="w-full max-w-sm space-y-2">
                  <form className="flex flex-col space-y-4">
                    <NameField
                      changeParentState={changeState}
                      placeholder="Your Name"
                      required
                    ></NameField>
                    <EmailField
                      changeParentState={changeState}
                      placeholder="Your Email"
                      required
                    ></EmailField>
                    <Button type="submit" id="SignUp">
                      Sign Up
                    </Button>
                  </form>
                </div> */

import * as React from "react";

import { cn } from "@/lib/utils"

const SignUpForm = React.forwardRef(({ className, ...props }, ref)) {
    //return("");
}

export { SignUpForm }
