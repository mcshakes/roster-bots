class RostersController < ApplicationController
  
	def create
		@roster = Roster.new(team_params)
	end

private

	def roster_params
		params.require(:roster).permit(:name, :email, :password)
	end
end
