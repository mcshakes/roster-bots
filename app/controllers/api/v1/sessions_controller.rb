
module Api
	module V1
		class SessionsController < ApplicationController
			skip_before_action :authenticate_request

			# POST /login
			def create
				command = AuthenticateTeam.call(params[:email], params[:password])

				if command.success?
					render json: { auth_token: command.result }
				else
					render json: { error: command.errors }, status: :unauthorized
				end
			end

			def sign
				
			end


		end
	end
end