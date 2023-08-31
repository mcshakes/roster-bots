class Player < ApplicationRecord
	self.primary_key = "uuid"
	before_save :generate_player_uuid, on: :create
	belongs_to :roster,:dependent => :destroy
	validates(:name, presence: true)

	validates_presence_of :roster
	validates_uniqueness_of :name

	before_validation :assign_all_attributes

	def get_all_attributes
		while true
			x = rand(1..50)
			y = rand(1..50)
			z = rand(1..50)
			return [x, y, z] if (x + y + z ) < 100
		end
	end

	def assign_all_attributes
		while true
			x, y, z = get_all_attributes
			unless self.roster.players.any? { |p| (p.speed + p.strength + p.agility) == (x + y + z) }							
				self.speed = x
				self.strength = y
				self.agility = z
				return
			end
		end		
	end

  private

  def generate_player_uuid
  	random_generated = [*('A'..'Z'),*('0'..'9')].shuffle[0,8].join
  	self.update(uuid: random_generated) if self.uuid.nil?
  end
end
