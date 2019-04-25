class Roster < ApplicationRecord
	belongs_to :team
	validates_uniqueness_of :team_id, :message => "Team can only have one Roster"

	serialize :players, JSON

	has_many :players
	accepts_nested_attributes_for :players

	# before_create :populate_team

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

# private

# 	def populate_team
# 		build_players
# 	end

end

