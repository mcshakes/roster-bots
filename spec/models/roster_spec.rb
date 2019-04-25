require 'rails_helper'

RSpec.describe Roster, type: :model do
	let(:test_team) { create :team }
	subject { described_class.new(team_id: test_team.id) }
	
	it "is valid with valid attributes" do
		expect(subject).to be_valid
	end

end
