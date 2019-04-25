class RostersController < ApplicationController
  
	def create
		@roster = Roster.new(team_params)
		@roster.players.build
	end

private

	def roster_params
		params.require(:roster).permit(:name, :email, :password)
	end
end

