Rails.application.routes.draw do
  root "pages#index"
  
  get "/teams", to: "teams#show"
  post "/teams", to: "teams#create"


  post "/login", to: "sessions#create"
end
