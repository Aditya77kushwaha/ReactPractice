#include <iostream>
#include <bits/stdc++.h>
#include <math.h>
using namespace std;
typedef long long ll;

#define si(x) scanf("%d", &x)
#define sl(x) scanf("%lld", &x)
#define ss(s) scanf("%s", s)
#define pi(x) printf("%d\n", x)
#define pl(x) printf("%lld\n", x)
#define ps(s) printf("%s\n", s)
#define f(i, a, b) for (ll i = a; i < b; i++)
#define up(s) transform(string s.begin(), string s.end(), string s.begin(), ::toupper)
#define PI 3.1415926535897932384626
#define pb push_back
#define maxe *max_element
#define mine *min_element

typedef vector<int> vi;
typedef vector<ll> vl;
typedef vector<string> vs;
typedef map<ll, ll> mpll;
typedef map<int, int> mpii;
typedef map<string, ll> mpsl;
typedef multiset<int> si;
typedef multiset<ll> sl;
typedef multiset<string> ss;
typedef long double ld;

int main()
{
    ios_base::sync_with_stdio(0), cin.tie(0), cout.tie(0);
    srand(chrono::high_resolution_clock::now().time_since_epoch().count());
    // your code goes here
    ll n, m;
    cin >> n >> m;
    ll a[n];
    f(i, 0, n)
            cin >>
        a[i];

    ll ma = ceil(a[0] / m), j = 0;
    f(i, 0, n)
    {
        if (ma < ceil(a[i] / m))
        {
            ma = ceil(a[i] / m);
            j = i;
        }
    }
    cout << a[j];
    return 0;
}
