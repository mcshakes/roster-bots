class TeamsController < ApplicationController
  before_action :authenticate_request, except: [:create, :show]

	def create
		@team = Team.new(team_params)

		if @team.save
			render json: @team,
					status: :created
		else
			render json: { errors: @team.errors.full_messages },
					status: :unprocessable_entity
		end
	end

	def show
		@team = Team.find_by(email: params[:email])
		@players = @team.roster.players
		
		render :show
		# render @team.as_json(include: { roster: {
		# 								include: { :players }
		# 								}
									
		# 						})
	end

private

	def team_params
		params.require(:team)
			  .permit(:name, :email, :password)
	end
end
