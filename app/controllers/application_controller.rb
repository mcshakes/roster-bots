class ApplicationController < ActionController::API
	before_action :authenticate

	def logged_in?
		!!current_team
	end

	def current_team
		if auth_present?
			team = Team.find(auth["team"])
			if team
				@current_team ||= team
			end
		end
	end

	def authenticate
		render json: { error: "unaothorized" }, status: 401 unless logged_in?		
	end

private

	
	def token
		request.env["HTTP_AUTHORIZATION"].scan(/Bearer(.*)$/).flatten.last
	end	

	def auth
		JsonWebToken.decode(token)
	end

	def auth_present?
		!!request.env.fetch("HTTP_AUTHORIZATION", "").scan(/Bearer/).flatten.first
	end
end
