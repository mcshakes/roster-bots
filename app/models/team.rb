class Team < ApplicationRecord
	VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
	validates(:name, presence: true)
	validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }
	validates_uniqueness_of :email, case_sensitive: false

	has_secure_password
	has_one :roster, :dependent => :destroy

	after_create :create_roster

	private
		def create_roster
			self.create_roster!
		end
end
