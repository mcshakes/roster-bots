FactoryBot.define do
  factory :team do
  	name { "secret team" }
    email { "team_name@teamail.com" }
    password { "password123" }
  end

  factory :roster do
  	team
  end
end