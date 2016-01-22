#!/bin/bash
# The shadow banker plugin builder Use > 1 to consume two arguments per pass in the loop (e.g. each
# argument has a corresponding value to go with it).
# Use > 0 to consume one or more arguments per pass in the loop (e.g.
# some arguments don't have a corresponding value to go with it such
# as in the --default example).
#./os_wp_config.sh -a helion -d www.certifiedacademicwriters.com -p 555aec5e04382ecded500002d@helion-certifiedcloud.rhcloud.com -s 55aec5e04382ecded500002e@55aec5e04382ecded500002e-certifiedcloud.rhcloud.com -u certifiedacademicessaywriters@gmail.com
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
    mkdir $TARGET/$PLUGIN_NAME/data
    mkdir $TARGET/$PLUGIN_NAME/images
    mkdir $TARGET/$PLUGIN_NAME/includes
    mkdir $TARGET/$PLUGIN_NAME/includes/api
    mkdir $TARGET/$PLUGIN_NAME/includes/utils
    mkdir $TARGET/$PLUGIN_NAME/includes/admin
    mkdir $TARGET/$PLUGIN_NAME/includes/abstracts
    mkdir $TARGET/$PLUGIN_NAME/includes/service
    mkdir $TARGET/$PLUGIN_NAME/templates
    mkdir $TARGET/$PLUGIN_NAME/templates/page
    mkdir $TARGET/$PLUGIN_NAME/templates/entity
    mkdir $TARGET/$PLUGIN_NAME/email_templates
}

copy_resources(){
    echo "Copying resources"
    cp includes/api/* $TARGET/$PLUGIN_NAME/includes/api
    cp includes/utils/* $TARGET/$PLUGIN_NAME/includes/utils
    cp includes/service/* $TARGET/$PLUGIN_NAME/includes/service
    cp templates/emails/* $TARGET/$PLUGIN_NAME/email_templates
    cp -r js/* $TARGET/$PLUGIN_NAME/js
}

delete_existing_project(){ 
    echo "Deleting existing project"
    rm -rf $TARGET/*
}

generate_code() {
    echo "Compiling java sources"
    javac -d bin -sourcepath src -cp lib/freemarker.jar src/com/cloderia/ide/Main.java
    echo "Starting code generator"
    java -cp lib/freemarker.jar:bin com.cloderia.ide.Main $(pwd)/ $PLUGIN_NAME 
}

create_archive(){
    echo "Creating plugin archive"
    cd $TARGET
    zip -r $PLUGIN_NAME.zip $PLUGIN_NAME
    cd ../
}

deploy_archive(){
    echo "Deploying archive"
    rm -rf ../current/wp-content/plugins/shadow-core
    cp -r target/shadow-core ../current/wp-content/plugins/

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
