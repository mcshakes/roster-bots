class Roster < ApplicationRecord
	belongs_to :team
	validates_uniqueness_of :team_id, :message => "Team can only have one Roster"

	serialize :players, JSON

	has_many :players
	accepts_nested_attributes_for :players

	after_create :create_players

	# def starters
	# 	self.players.select do |player|
	# 		endplayer if player.status(self) == "Starter"
	# 	end
	# end

	# def alternates
	# 	self.players.select do |player|
	# 		endplayer if player.status(self) == "Alternate"
	# 	end
	# end

	private

	def create_players
		12.times.each do
			self.players.create!(name: Faker::Name.name)
		end
	end
end

