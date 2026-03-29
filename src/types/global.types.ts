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

export type TMeta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};
