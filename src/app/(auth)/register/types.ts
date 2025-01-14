export interface SocialButtonProps {
    icon: string;
    text: string;
    alt: string;
    siteURL:string;
  }

  export interface InputFieldProps {
    label: string;
    type: "text" | "email" | "password" | "number";
    value: string;
    required?: boolean;
  }
