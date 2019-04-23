class AuthenticateTeam
	prepend SimpleCommand

	def initialize(email, password)
		@email = email
		@password = password
	end

	def call
		JsonWebToken.encode(team_id: team.id) if team		
	end

private

	attr_accessor :email, :password
	
	def team
		team = Team.find_by_email(email)

		return team if team && team.authenticate(password)

		errors.add :team_authentication, "Invalid credentials"
		nil
	end

end