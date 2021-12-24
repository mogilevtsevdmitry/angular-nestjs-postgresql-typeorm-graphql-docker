import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateUserInput {
	@Field()
	email: string

	@Field({ nullable: true })
	name: string
}