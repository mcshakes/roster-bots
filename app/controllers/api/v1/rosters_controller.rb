module Api
	module V1
		class RostersController < ApplicationController
  
			def create
				@roster = Roster.new(team_params)
				@players = @roster.players.build
			end

		private

			def roster_params
				params.require(:roster).permit(:name, :email, :password)
			end
		end
	end
end