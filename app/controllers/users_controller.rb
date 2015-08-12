class UsersController < ApplicationController
	before_action :authenticate_user!, except: [:check_chilean_id_with_rut, :eagle_eye]
	layout :resolve_layout
	def home
		@documents = current_user.documents
		@document = Document.new
	end
	def create
	  @user = User.create( user_params )
	end

	def check_chilean_id
		serial = params[:serial]
		valid_chilean_id = current_user.user_verification_data.first.chilean_id_valid?(serial)
		render json: { valid: valid_chilean_id }
	end

	def eagle_eye
	end

	def check_chilean_id_with_rut
		headers['Access-Control-Allow-Origin'] = '*'
		rut = params[:rut]
		serial = params[:serial]
		user = User.new(id_number: rut)
		valid_chilean_id = user.valid_chilean_with_rut?(rut, serial)
		render json: { valid_chilean_id: valid_chilean_id }
	end

	private

	# Use strong_parameters for attribute whitelisting
	# Be sure to update your create() and update() controller methods.

	def user_params
	  params.require(:user).permit(:avatar, :countries)
	end

	private

	def resolve_layout
		case action_name
		when "eagle_eye"
		  "blank"
		else
		  "application"
		end
	end
end