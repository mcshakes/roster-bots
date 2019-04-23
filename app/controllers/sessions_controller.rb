class SessionsController < ApplicationController
	skip_before_action :authenticate

	# POST /login
	def create
		team_manager = Team.find_by(email: params[:email])

		if team_manager.authenticate(params[:password])
			jwt = JsonWebToken.issue({ team: team.id })
			render json: { jwt: jwt }
		else

		end
	end


	private

	def auth_params
		params.permit(:email, :password)
	end
end