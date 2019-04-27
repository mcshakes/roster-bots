require 'rails_helper'

RSpec.describe "Team Login", :type => :request do


	it "returns 401 status error for invalid login" do
		headers = { "CONTENT_TYPE" => "application/json" }
		
		post "/api/v1/login", :params => '{ "email": "SuperTeam@gmail.com", "password": "password123" }', :headers => headers
		
		expect(response.content_type).to eq("application/json")
	    expect(response.status).to eq(401)
	    expect(response).to_not be_successful
	end
end