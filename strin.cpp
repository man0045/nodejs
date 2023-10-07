#include<iostream>
#include<string>
using namespace std;
int main(){
    string str = "MannuChaurasiya";
    int count =0;
    int i =0;
    while(str[i] != '\0'){
        if(str[i]=='a' || str[i]=='u' || str[i] =='o'|| str[i] =='e')
            count ++;
        i++;
        
    }
    cout<<count<<endl;

}