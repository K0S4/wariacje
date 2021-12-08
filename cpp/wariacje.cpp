#include <iostream>

using namespace std;

int main()
{   
    int kamkar = 0;
    string wariacje[5040];
    for (int t=0;t<10;t++){
    for (int s=0;s<10;s++){
        for (int d=0;d<10;d++){
            for (int j=0;j<10;j++){
                if(j != d && j!= t && j!= s && d!=s && d!=t && s!=t){
                    std::cout << (to_string(t) + to_string(s) + to_string(d) + to_string(j)) << std::endl;
                    wariacje[kamkar] = {to_string(t)  + to_string(s) + to_string(d) + to_string(j)};
                    kamkar++;
                }else{
                    std::cout << (to_string(t) + to_string(s) + to_string(d) + to_string(j)+"skipped") << std::endl;
                }

            }
        }
    }
}
cout<<wariacje[1234];
}