import { Type, Static } from '@sinclair/typebox';

export const User = Type.Object({
  id: Type.Number(),
  createdAt: Type.String(),
  email: Type.String(),
  weight: Type.Optional(Type.Number()),
  is18: Type.Optional(Type.Boolean()),
  name: Type.Optional(Type.String()),
  successorId: Type.Optional(Type.Number()),
  keywords: Type.Array(Type.String()),
  biography: Type.String(),
});

export type UserType = Static<typeof User>;
