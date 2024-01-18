
#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int solution ( int initialhealth , vector<int>delta){

    int sol = 0 ;

    for(int i = 0 ; i< delta.size() ; i++){
        if(sol> 100){
            sol = 100;
        }
        if(sol<0 ){
            sol = 0;
        }
        sol+=delta[i];

    }

    if(sol> 100){
        return 100;
    }
    if(sol<0 ){
        sol = 0;
    }

    return sol;
}
 
int main(){

    int initialhealth = 12;
    vector<int>vec(4);
    vec[0] = -4;
    vec[1] = 100;
    vec[2] = 6;
    vec[3] = -2;
    int k = solution (initialhealth , vec);
    cout<<k;
    return 0;
}
