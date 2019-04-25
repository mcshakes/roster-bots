require 'rails_helper'

RSpec.describe Player, type: :model do

	let(:test_team) { create :team }
	let(:roster) { create :roster }
	
	subject { described_class.new(name: "Billy Kicker", roster_id: roster.id) }

	it { should respond_to(:uuid) }
	it { should respond_to(:roster_id) }
	it { should respond_to(:speed) }
	it { should respond_to(:strength) }
	it { should respond_to(:agility) }

	it "is valid with valid attributes" do
		expect(subject).to be_valid
	end

	it "should initialize player with name" do
		expect(subject.name).to be_kind_of(String)
	end

	it "should create a player with string UUID" do
		player_dos = Player.create(name: "Dude McGuff", roster_id: roster.id)
		expect(player_dos.uuid).to be_kind_of(String)
	end

end
