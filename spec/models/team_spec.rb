require 'rails_helper'

RSpec.describe Team, type: :model do
  subject { described_class.new(name: "Red Team", email: "redteam_rulez@gmail.com", password: "password1") }

  it { should respond_to(:name) }
  it { should respond_to(:email) }

  it "is valid with valid attributes" do
  	expect(subject).to be_valid
  end

  it "is invalid without a name" do
  	team_bad = Team.new(name: nil)
  	expect(team_bad).to_not be_valid
  end

  it "is invalid without an existing email" do
  	team_bad = Team.new(name: "poop", email: "")
  	expect(team_bad).to_not be_valid
  end

  it "is invalid with a duplicate email" do
  	good_team = Team.create(name: "real team", email: "blueteam_rulez@gmail.com")
  	team_bad = Team.create(name: "fake team", email: "blueteam_rulez@gmail.com")
  	expect(team_bad).to_not be_valid
  end

  it "in invalid with terribly formatted emails" do
  	bad_addresses = %w[user@example,com user_at_foo.org user.name@example.foo@bar_baz.com foo@bar+baz.com]

  	bad_addresses.each do |add|
  		subject.email = add
  		expect(subject).to_not be_valid	
  	end
  end

end
