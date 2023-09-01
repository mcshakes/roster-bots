# require 'rails_helper'

# RSpec.describe "Team Creation", :type => :request do
	
# 	it "creates a Team" do
# 		headers = { "CONTENT_TYPE" => "application/json" }
# 		post "/api/v1/teams", :params => '{ "team": { "name": "My SuperTeam", "email": "SuperTeam@gmail.com", "password": "password123" } }', :headers => headers
		
# 		expect(response.content_type).to eq("application/json")
# 	    expect(response).to have_http_status(:created)
# 	    expect(response.status).to eq(201)
# 	    expect(response).to be_successful
# 	end
# end