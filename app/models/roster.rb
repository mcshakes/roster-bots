class Roster < ApplicationRecord
	belongs_to :team
	validates_uniqueness_of :team_id, :message => "Team can only have one Roster"

	serialize :players, JSON

	has_many :players
	accepts_nested_attributes_for :players

	after_create :create_real_players
	after_create :create_fantasy_players

	private

	def create_real_players
		50.times.each do
			self.players.create!(name: Faker::Name.name)
		end
	end

	def create_fantasy_players
		50.times.each do
			self.players.create!(name: Faker::TvShows::GameOfThrones.character)
		end
	end
end

