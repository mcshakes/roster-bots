Rails.application.routes.draw do
  
 

  namespace :api do
  	namespace :v1 do
		get "/teams", to: "teams#show"

		resources :teams, only: [:create, :update]

		post "/login", to: "sessions#create"
  	end
  end

  # get "*", to: "home#index"
end
