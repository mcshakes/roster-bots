class Player < ApplicationRecord
	self.primary_key = "uuid"
	before_save :generate_player_uuid, on: :create
	belongs_to :roster
	validates(:name, presence: true)
	validates_uniqueness_of :name

  private

  def generate_player_uuid
  	random_generated = [*('A'..'Z'),*('0'..'9')].shuffle[0,8].join
  	self.update(uuid: random_generated) if self.uuid.nil?
  end
end
