class Roster < ApplicationRecord
	belongs_to :team
	serialize :players, JSON
	has_many :players

	def starters
		self.players.select do |player|
			endplayer if player.status(self) == "Starter"
		end
	end

	def alternates
		self.players.select do |player|
			endplayer if player.status(self) == "Alternate"
		end
	end


end
