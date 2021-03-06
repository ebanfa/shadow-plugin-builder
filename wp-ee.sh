#!/bin/bash
# The shadow banker plugin builder Use > 1 to consume two arguments per pass in the loop (e.g. each
# argument has a corresponding value to go with it).
# Use > 0 to consume one or more arguments per pass in the loop (e.g.
# some arguments don't have a corresponding value to go with it such
# as in the --default example).
#./shadow-builder.sh -n wp-commerce -t target -c config/wp-commerce.xml
while [[ $# > 0 ]]
do
key="$1"

case $key in
    -n|--name)
    PLUGIN_NAME="$2"
    shift # past argument
    ;;
    -t|--target)
    TARGET="$2"
    shift # past argument
    ;;
    -c|--config)
    CONFIG="$2"
    shift # past argument
    ;;
    *)
            # unknown option
    ;;
esac
shift # past argument or value
done


build_plugin_directory () {
    echo "Building plugin directory structure"
    mkdir $TARGET
    mkdir $TARGET/$PLUGIN_NAME
    mkdir $TARGET/$PLUGIN_NAME/js
    mkdir $TARGET/$PLUGIN_NAME/js/vendors
    mkdir $TARGET/$PLUGIN_NAME/css
    mkdir $TARGET/$PLUGIN_NAME/fonts
    mkdir $TARGET/$PLUGIN_NAME/sql
    mkdir $TARGET/$PLUGIN_NAME/data
    mkdir $TARGET/$PLUGIN_NAME/images
    mkdir $TARGET/$PLUGIN_NAME/includes
    mkdir $TARGET/$PLUGIN_NAME/includes/view
    mkdir $TARGET/$PLUGIN_NAME/includes/uicomponent
    mkdir $TARGET/$PLUGIN_NAME/includes/controller
    mkdir $TARGET/$PLUGIN_NAME/includes/service
    mkdir $TARGET/$PLUGIN_NAME/includes/api
    mkdir $TARGET/$PLUGIN_NAME/includes/abstracts
    mkdir $TARGET/$PLUGIN_NAME/includes/font
    mkdir $TARGET/$PLUGIN_NAME/includes/utils
    mkdir $TARGET/$PLUGIN_NAME/includes/admin
    mkdir $TARGET/$PLUGIN_NAME/templates
    mkdir $TARGET/$PLUGIN_NAME/templates/page
    mkdir $TARGET/$PLUGIN_NAME/templates/entity
    mkdir $TARGET/$PLUGIN_NAME/templates/uicomponent
    mkdir $TARGET/$PLUGIN_NAME/email_templates
}

copy_resources(){
    echo "Copying resources"
    cp -r js/* $TARGET/$PLUGIN_NAME/js
    cp -r css/* $TARGET/$PLUGIN_NAME/css
    cp -r fonts/* $TARGET/$PLUGIN_NAME/fonts
    cp -rf vendor/ $TARGET/$PLUGIN_NAME/
    cp images/* $TARGET/$PLUGIN_NAME/images
    cp includes/api/* $TARGET/$PLUGIN_NAME/includes/api
    cp includes/view/* $TARGET/$PLUGIN_NAME/includes/view
    cp includes/utils/* $TARGET/$PLUGIN_NAME/includes/utils
    cp includes/controller/* $TARGET/$PLUGIN_NAME/includes/controller
    cp includes/uicomponent/* $TARGET/$PLUGIN_NAME/includes/uicomponent
    cp templates/$PLUGIN_NAME/emails/* $TARGET/$PLUGIN_NAME/email_templates
}

delete_existing_project(){ 
    echo "Deleting existing project"
    rm -rf $TARGET/*
}

generate_code() {
    echo "Compiling java sources"
    javac -d bin -sourcepath src -cp lib/freemarker.jar src/com/cloderia/ide/Main.java
    echo "Starting code generator"
    java -cp lib/freemarker.jar:bin com.cloderia.ide.Main $(pwd)/ $PLUGIN_NAME $CONFIG
}

create_archive(){
    echo "Creating plugin archive"
    cd $TARGET
    zip -r $PLUGIN_NAME.zip $PLUGIN_NAME
    cd ../
}

deploy_archive(){
    echo "Deploying archive"
    sudo rm -rf /var/www/html/wp-content/plugins/$PLUGIN_NAME
    sudo cp -rf target/$PLUGIN_NAME /var/www/html/wp-content/plugins
    sudo chown -R www-data.www-data /var/www/html/wp-content/plugins

}
do_erase_option() {
   delete_existing_project
}
    echo "That directory exists."
    echo "Press Y to erase the existing directory or N to abort."
    do_erase_option 
    build_plugin_directory
    generate_code
    copy_resources
    create_archive
    deploy_archive
