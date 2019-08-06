export type Intent = {
  name: string;
  updated_at: { date: string };
  utterances: { text: string; variables: any[] }[];
};

export type InputContext = string[];
export type OutputContext = {
  name: string | void;
  parameters: {};
  lifespan: number;
};

export type ProjectResponse = Readonly<{
  data?: any[];
  errors?: any[];
}>;

export type Message = {
  message_id: string;
  next_message_ids: any[];
  previous_message_ids: any[];
  message_type: string;
  intent: { value: string };
  payload: any;
};