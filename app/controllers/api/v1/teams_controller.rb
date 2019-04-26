module Api
	module V1
		class TeamsController < ApplicationController
		  before_action :authenticate_request, except: [:create, :show, :update]

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
			end

			def update
				@team = Team.find_by(id: params[:id])
				binding.pry
				if @team.update_attributes(team_params)
					render json: @team,
							status: :updated
				else
					render json: { errors: @team.errors.full_messages },
							status: :unprocessable_entity
				end
			end
			
		private

			def team_params
				params.require(:team)
					  .permit(:name, :email, :password)
			end
		end
	end
end
