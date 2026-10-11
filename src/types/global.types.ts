type TErrorMessage = {
  message: string;
  status: number;
};

type TErrorResponse = {
  response: {
    data: TErrorMessage;
  };
};

type TInputTypes = 'text' | 'email' | 'password';

type TMeta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type { TErrorMessage, TErrorResponse, TInputTypes, TMeta };
