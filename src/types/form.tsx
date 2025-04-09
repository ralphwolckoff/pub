export interface FormsType {
  control?: any;
  onSubmit: any;
  register: any;
  errors: any;
  isLoading: boolean;
  handleSubmit: any;
}

export interface RegisterFormType {
  email: string;
  password: string;
  how_did_hear: string;
}

export interface LoginFormType {
  email: string;
  password: string;
}

export interface ForgetPasswordFormType {
  email: string;
}
