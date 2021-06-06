interface InputProps {
    type: string;
    placeholder: string
}


export interface Input {
  props: {
       [key: string]: InputProps
  }
}

export interface LoginData {
  email: string;
  password: string
}

export interface RegisterData {
  firstname: string;
  email: string;
  password: string
  confirmPassword: string;
}


