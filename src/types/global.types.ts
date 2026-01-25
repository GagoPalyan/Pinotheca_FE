export type TErrorMessage = {
  message: string;
  status: number;
};

export type TErrorResponse = {
  response: {
    data: TErrorMessage;
  };
};

export type TInputTypes = 'text' | 'email' | 'password';
