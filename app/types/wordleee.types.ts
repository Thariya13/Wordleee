export interface WordTest {
  question: string;
  answer: string;
}

export interface WordCategory {
  name: string;
  wordTests: WordTest[];
}

export interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}
