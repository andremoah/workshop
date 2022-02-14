#!/usr/bin/env groovy

@Library('shared-library')_   //Import shared library

properties([disableConcurrentBuilds()])

node {
    try {
        def isGit = sh(returnStdout: true, script: '[ -d ".git" ] && echo "true" || echo "false"').trim()
        
        if(isGit == "true") {
            echo "Initialized"
        } else {
            echo "Not initialized"
            
            checkout scm
        }

        /* Send build start notification */
        teamsintegration.Notify('INPROGRESS')

        /* Checks out repository */
        stagecheckout()

        /* Installs all project dependencies */
        stageinstall()

        /* Builds project */
        stagebuild()

        /* Executes project tests */
        stagetest()

        /* Publishes images */
        stagepublish()

        /* Deploys published images */
        stagedeploy()
    }
    catch (e) {        
        echo "ERROR: ${e}"        
        currentBuild.result = "FAILED"

        /* If there's an exception thrown, the build fails */
        throw e
    }
    finally {
        /* Success or failure, always send notifications */
        teamsintegration.Notify(currentBuild.result) 
    }
}
