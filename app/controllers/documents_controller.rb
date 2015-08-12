class DocumentsController < ApplicationController
	before_action :authenticate_user!

	def index
		@documents = current_user.documents
	end

	def create
	  document = Document.new( document_params )
	  document.name = params[:document][:file].original_filename
	  document.save!
	  current_user.documents << document
	  redirect_to user_root_url
	end

	def show
		@document = Document.find params[:id]
	end

	def destroy
		document = Document.find(params[:id])
		document.destroy
		respond_to do |format|
		  format.html { redirect_to user_root_url }
		  format.json { render json: {} }
		end
	end

	def sign
		@document = Document.find(params[:id])
		serial = params[:serial]
		@valid_chilean = if current_user.chilean_id_validation_enabled
			serial.nil? ? false : current_user.valid_chilean?(serial)
		else
			nil
		end
		@document.sign(current_user) unless @valid_chilean == false
	end

	private

	def document_params
	  params.require(:document).permit(:name, :file)
	end
end