export interface SocialButtonProps {
    icon: string;
    text: string;
    alt: string;
    siteURL:string;
  }

  export interface InputFieldProps {
    label: string;
    type: "text" | "email" | "password";
    value: string;
    required?: boolean;
  }
