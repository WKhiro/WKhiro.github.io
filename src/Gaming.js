import React from 'react';
import Container from 'react-bootstrap/Container';
import { Spring } from 'react-spring/renderprops';
import { GradientBackground } from './components/GradientBackground';
import { Reference } from './components/Reference';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import ReactPlayer from 'react-player'
import critMath from './assets/binomialCrit.png';
import top from './assets/topChampions.png';
import bot from './assets/bottomChampions.png';

const Styles = styled.div`

.textHolder
{
  color: white;
  position: relative;
}

.imgScale
{
  width: 64px;
  height: 64px;
}

.mathBorder
{
  border: 4px solid black;
}

.player
{
  display: inline;
}

.links
{
  color: #70F0FF;
  text-decoration: none;
  display: inline;
  padding-right: 20px;
  font-size: 32px;
  &:hover
  {
    opacity: 0.8;
  }
}

.padImages
{
  padding-bottom: 20px;
}

.leaderDiv
{
  display: inline-block;
}

`;

class Gaming extends React.Component {

  render() {
      return (
        <Styles>
          <GradientBackground />
          <Container>
            <Container className="textHolder">
            <div className="player">
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/4/46/RivenSquare.png?version=283e9a80fdf9743804abc4e16e43975c" alt=""/>
            </div>
              <h1 className="player"> Riven </h1>
              <p> Welcome to a comprehensive guide on my favorite champion from League of Legends, Riven. </p>
              <p> This guide is currently a work-in-progress, and a huge blob of text. </p>
              <h1> Table of Contents </h1>
              <Link className="links" to='/gaming/#section1'>RUNES</Link>
              <Link className="links" to='/gaming/#section2'>ITEMS</Link>
              <Link className="links" to='/gaming/#section3'>META</Link>
              <h1> Recommended Build </h1>
              <div className="padImages">
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/f/f2/Black_Cleaver.png?version=d552f5b58c551a49776470eaa31e7fa9" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/1/11/Death%27s_Dance.png/180px-Death%27s_Dance.png?version=b4ba4c412de18e66e001bcf457ac8175" alt=""/>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/d/da/Guardian_Angel.png?version=b4253321f11d67ce710bdf842208dbde" alt=""/>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/2/21/Mercurial_Scimitar.png?version=eeec224061fee42d358d02767f27acb9" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/1/1d/Mortal_Reminder.png/180px-Mortal_Reminder.png?version=b1178a775ebc78ef5161cff6e25525bd" alt=""/>
              </div>
              <p> Black Cleaver, Death's Dance, Guardian Angel, Mercurial Scimitar, Mortal Reminder </p>
              <p> This build will serve you well in nearly every game. If you
              don't know what to build, just go with this build path. Feel free
              to get Stopwatch, Quicksilver Sash, and Executioner's Calling
              earlier if you need them. </p>
              <h1> Boots </h1>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/6/6f/Ninja_Tabi.png?version=e4c6fa32fc065da5c732b91fe0135d92" alt=""/>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/3/36/Mercury%27s_Treads.png?version=645f00a6330cedb746eb83ee3607133d" alt=""/>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/d/d3/Ionian_Boots_of_Lucidity.png?version=b4c40e71afa62e4c8b110e7337604a66" alt=""/>
              <p> Ninja Tabi, Mercury's Treads, or Ionian Boots of Lucidity </p>
              <h1> Runes </h1>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/a/a0/Rune_Conqueror.png/180px-Rune_Conqueror.png?version=3cea421710803010e0b30e48fac3ae7e" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/2/29/Rune_Triumph.png?version=142ca6607aae6c1022bac424f895cfd1" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/c8/Rune_Legend_-_Alacrity.png?version=8a071d1e024c6a9658cb873f525ec493" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/e/e5/Rune_Last_Stand.png?version=a20a2d1234a70f2b483ff0350667ac57" alt=""/>
              <p> Conqueror, Triumph, Legend: Alacrity, Last Stand </p>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/b/b0/Rune_Transcendence.png?version=d1a0897f7246d8fe32c3ac3575fb48d6" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/b/b1/Rune_Gathering_Storm.png?version=01b1c65b73433a65ddc06e9545b81c78" alt=""/>
              <p> Transcendence, Gathering Storm </p>
              <h1> Summoner Spells </h1>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/3/3a/Teleport_%28Summoner_Spell%29.png?version=e5151d0f6ce3140279ee0513742dda61" alt=""/>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/8/8e/Flash_%28Summoner_Spell%29.png?version=9c6dc20f4fe2857f0dfcf6c3c5213715" alt=""/>
              <p> Teleport, Flash </p>
              <h1> Overview and Personal Opinion </h1>
              <p> Riven is a unique champion that heavily employs the use of animation
              cancelling in order to succeed. I personally believe that Riven will
              always be relevant in the right hands, especially with the existence of
              Death's Dance, but is currently inferior to other top lane
              champions. Riven isn't necessarily weak by any means, but other
              champions are simply stronger, easier to play, and have more utility
              within their kits in comparison to Riven. If you are still willing to
              play this champion despite acknowledging the fact that you will have to
              work many times harder than your lane opponent to achieve the same levels
              of damage, then welcome!
              </p>
              <h1> Ignite: An Inferior Summoner Spell </h1>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/9/9e/Ignite_%28Summoner_Spell%29.png?version=d35e49a67449d3039f7fc9be3c7512cf" alt=""/>
              <p> I do not recommend taking Ignite over Teleport on Riven.
              Teleport's usefulness is invaluable, and you can pick up kills
              on Riven without Ignite. If you don't have teleport and your
              lane opponent does, they will be able to teleport back to lane and
              force you to lose minions to tower, while you're forced to walk
              back to lane. Teleport also acts as a safety crutch in the case
              that you make a mistake early on, and need to recall for health.
              Furthermore, it opens up the opportunity for teleport ganks bottom
              lane. Take Teleport. </p>
              <h1 id={"section1"}> Runes </h1>
              <h5> Situational Rune Selections describe scenarios where I believe
              that you could potentially choose one rune over the other. If I don't
              talk about a particular rune in this section, it is non negotiable
              and objectively the best selection. </h5>
              <h3> Main Tree Options </h3>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/9/93/Rune_Precision.png?version=23d57e52a1547330259c1a750d082c24" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/a/a0/Rune_Conqueror.png/180px-Rune_Conqueror.png?version=3cea421710803010e0b30e48fac3ae7e" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/0/07/Rune_Sorcery.png?version=56cf246d06d4a6aaea4d7d5afd9d7595" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/0/06/Rune_Phase_Rush.png?version=330aa06a694a709509815b70eaf25224" alt=""/>
              <p> Precision is pretty much your only option for your main tree
              as Riven. Conqueror is objectively the best keystone on her. The
              only time I would ever see Riven going another primary tree would
              be against Tryndamere. In this one specific matchup, taking the
              Sorcery tree into the Phase Rush keystone would be beneficial,
              as it would allow you to actually run away from the raging
              swordsman after a quick trade.
              </p>
              <h5> Situational Rune Selections for Precision </h5>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/c8/Rune_Legend_-_Alacrity.png?version=8a071d1e024c6a9658cb873f525ec493" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/2/21/Rune_Legend_-_Tenacity.png?version=bc4d9590903f07777344eace93b7ed15" alt=""/>
              <p> Either go Legend: Alacrity or Legend: Tenacity. Legend: Bloodline
              is not as good as the other two options. At max stacks, they grant
              18% attack speed, 30% tenacity, and 12% lifesteal respectively. I
              personally like to take Legend: Alacrity, as the extra attack speed
              makes Broken Wings (Q) combos feel much smoother. Legend: Tenacity
              is perfectly fine to take if you see a lot of crowd-control on the
              enemy team. </p>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/e/e5/Rune_Last_Stand.png?version=a20a2d1234a70f2b483ff0350667ac57" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/9/91/Rune_Coup_de_Grace.png?version=1868fd0d7b6c1dbf6c6137383ea1d2a9" alt=""/>
              <p> Last Stand and Coup de Grace are your two choices here. I used
              to only take Coup de Grace, but after it was nerfed multiple times,
              Last Stand has slowly overtaken it as the better option in most
              matchups. Take Coup de Grace if you are against someone squishy,
              or are going a more glass-cannon oriented build on Riven. Otherwise,
              take Last Stand, as you will constantly be hurt or bleeding to death
              from Death's Dance.
              </p>
              <h3> Secondary Tree Options </h3>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/0/07/Rune_Sorcery.png?version=56cf246d06d4a6aaea4d7d5afd9d7595" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/2/2c/Rune_Inspiration.png?version=b7f43ad1117120967b21abb560d3cd5c" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/9/97/Rune_Resolve.png?version=6b2298c1750a54de782c7bb4b09a79de" alt=""/>
              <p> You have three options here actually; Sorcery, Inspiration, or
              Resolve. I personally like to take Sorcery my secondary tree, as
              it allows you to get Transcendence and Gathering Storm. This setup
              grants you 10% CDR for free after reaching level 10 (allowing you
              to reach 40% CDR perfectly with Black Cleaver and Death's Dance),
              provides from compensation for any extra CDR you get over the cap,
              and allows you to scale harder into the later stages of the game.
              I typically like to play safely as Riven early on until I hit my
              level 3 or 6 power spike; if you like to trade a lot earlier on,
              Inspiration is optimal. I just don't like the other runes you have
              to choose from besides the obvious Cosmic Insight.
              </p>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/d/d2/Rune_Bone_Plating.png?version=b203e07cfa4277b2b6f2a3ff7483bb31" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/b/b9/Rune_Mirror_Shell.png?version=e541d0f93c7090900b3111fdbcbf57e8" alt=""/>
              <p> As for Resolve, the only reason why you would take this tree is
              due to one rune: Bone Plating. This rune is overpowered.
              Being able to mitigate 30-60 damage (based on level) from 3
              attacks or abilities from your opponent is insane early game, and
              provides you with much needed survivability. You can easily win
              duels early on if you take Resolve. Take Shield Bash for your
              other rune, as it gives you a nice autoattack buff every time you
              use Valor (E). The only downside to taking this tree is the
              lack of CDR. Otherwise, it's a stellar secondary tree for Riven.
              </p>
              <h5> Situational Rune Selections for Sorcery </h5>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/2/24/Rune_Nimbus_Cloak.png?version=fa2f22080f720c0c9ef587987b7312aa" alt=""/>
              <p> None. However, if you're jungling as Riven for fun, take
              Nimbus Cloak over Transcendence. You'll get the 10% CDR you
              lost from Transcendence from your jungle item, and gain a movement
              speed steroid every time you use Smite this way.</p>
              <h5> Situational Rune Selections for Inspiration </h5>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/b/bf/Rune_Magical_Footwear.png?version=21bd16e69ed196b56e0ef078e113dfa9" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/ca/Rune_Perfect_Timing.png?version=1c0c6d12dd8fbe9f108c1df1f1d264d5" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/c1/Rune_Future%27s_Market.png?version=cb9e45f0f903d005e478380a16388b18" alt=""/>
              <p> Cosmic Insight is required, and is the reason why you take this
              tree. Your only choices for your last rune would be between Magical
              Footwear, Perfect Timing, and Future's Market. I would personally
              choose Magical Footwear over the other two; Perfect Timing takes
              up a precious item slot, and Future's Market literally puts you
              in debt. Magical Footwear is not without its cons either, as it
              restricts you from rushing tier 2 boots in tough matchups.
              </p>
              <h3> Offense, Flex, and Defensive Runes </h3>
              <img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a3/Rune_shard_Adaptive_Force.png/revision/latest/scale-to-width-down/30?cb=20181122101607" alt=""/>
              <img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a3/Rune_shard_Adaptive_Force.png/revision/latest/scale-to-width-down/30?cb=20181122101607" alt=""/>
              <img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e5/Rune_shard_Armor.png/revision/latest/scale-to-width-down/30?cb=20181122101608" alt=""/>
              <img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/1/10/Rune_shard_Magic_Resistance.png/revision/latest/scale-to-width-down/30?cb=20181122101611" alt=""/>
              <p> In most cases, take adaptive force for both Offense and Flex,
              and then Armor or Magic Resist for Defensive. I never take health
              for the defensive rune, since it does nothing for you early game,
              and needs time to scale unlike the other two options.
              </p>
              <h5> Situational Rune Selections for Stats </h5>
              <img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a3/Rune_shard_Adaptive_Force.png/revision/latest/scale-to-width-down/30?cb=20181122101607" alt=""/>
              <img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e4/Rune_shard_Attack_Speed.png/revision/latest/scale-to-width-down/30?cb=20181122101609" alt=""/>
              <img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/4/47/Rune_shard_Cooldown_Reduction.png/revision/latest/scale-to-width-down/30?cb=20181122101609" alt=""/>
              <p> You could honestly take any of these three offensive runes for
              Riven. I personally like taking attack speed over doubling down
              on adaptive force. Attack speed feels great, what can I say? If
              you go Inspiration as your secondary tree, I highly recommending
              taking the scaling CDR rune, as it grants you 6% CDR at level 1,
              and eventually gives you the 10% CDR you missed out on from not
              taking the Sorcery tree.
              </p>

              <h1 id={"section2"}> Starting Items </h1>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/f/fd/Long_Sword.png?version=b7a1ced04adab1c3090388d76744e7d0" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/a/af/Refillable_Potion.png?version=bfaf651603d56834c38401026016e0d0" alt=""/>
              <p> I usually start Long Sword and Refillable Potion instead of 3 potions
              since I see myself using potions very often. If you REALLY need to stay
              in lane and not lose Teleport advantage early, feel free to take 3 potions.
              Otherwise, I prefer Refillable potion.
              </p>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/c2/Doran%27s_Blade.png?version=c6c3af920e6624d37dbe6ba5df840686" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/c6/Item_SquareHealth_Potion.png?version=fe37524d05186339a179371b286bba1b" alt=""/>
              <p> Doran's Blade and 1 potion is a very strong start, and is often what
              I see myself getting first to win a fight early on. The extra health and
              lifesteal allows you to turn close fights into victories. Feel free to
              also get 2 Doran's Blades if you really want to dominate early on, or
              feel uncomfortable against your lane opponent. Personally, I would
              advise against stacking more than 2 Doran's Blades.
              </p>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/8/81/Doran%27s_Shield.png?version=5834a4aae905b5cb5f3a1d4aa127be54" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/c6/Item_SquareHealth_Potion.png?version=fe37524d05186339a179371b286bba1b" alt=""/>
              <p> Doran's Shield and 1 potion is the standard start against either
              tough or ranged lane opponents, such as Jayce, Gangplank, or Kennen.
              The passive will help you sustain alongside your shield when you get
              poked while trying to get minions.
              </p>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/c9/Cloth_Armor.png?version=4ee85485f51bfa4860ec51c37a09a6b7" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/c6/Item_SquareHealth_Potion.png?version=fe37524d05186339a179371b286bba1b" alt=""/>
              <p> Cloth Armor and 5 potions is something I would only ever consider
              taking against these champions: Jayce, Kennen, Gangplank, or any
              Marksman. This essentially allows you to survive lane and rush Ninja
              Tabi. Don't expect to get any early kills if you start this.
              </p>
              <h1> Boots </h1>
              <h5> Do not get any boots other than these three on Riven. </h5>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/6/6f/Ninja_Tabi.png?version=e4c6fa32fc065da5c732b91fe0135d92" alt=""/>
              <p> Ninja Tabi is broken in my opinion; it reduces damage from
              all basic attacks by 12%, which will instantly make you a lot tankier
              to a large majority of champions top lane. There is no shame in
              rushing this if you're having trouble against an AD top laner. Bonus
              movement speed is always nice, and you'll have a much easier time
              surviving.
              </p>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/3/36/Mercury%27s_Treads.png?version=645f00a6330cedb746eb83ee3607133d" alt=""/>
              <p> Mercury's Treads are the go-to buy if the enemy team has a lot of
              crowd-control abilities, even if your lane opponent may not be a mage.
              Unless you're able to close out the game early, get this even if your
              lane opponent does physical damage. You won't be rushing Ninja Tabi
              anyways if you're dominating top, and Riven is very vulnerable when
              CC'd. </p>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/d/d3/Ionian_Boots_of_Lucidity.png?version=b4c40e71afa62e4c8b110e7337604a66" alt=""/>
              <p> Ionian Boots of Lucidity used to be a favorite of mine, and allows
              you to quickly attain 45% CDR if you run the Inspiration tree. However,
              I tend to shy away from these boots in favor of Ninja Tabi and Mercury's
              Treads. These boots are a fantastic choice if you're trying to snowball
              a lead into a quick victory.
              </p>
              <h1> Item Explanations </h1>
              <h2> Executioner's Calling </h2>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/d/da/Executioner%27s_Calling.png?version=56a7a7bf8b94813731bb816e0137c911" alt=""/>
              <p> A special section just for this item. Healing is extremely prevalent
              in the game right now, especially due to how overpowered Blade of the
              Ruined King and Death's Dance are right now. Build this item early and
              sit on it if your lane opponent rushes any of the two items previously
              mentioned, or has in-built healing like Aatrox or Vladimir. It's 800
              gold. You'll ruin your opponent's day. It'll be lovely. Invest in this
              item unless you want to be sucked dry by Vladimir. </p>
              <h2> First Full Item Choices </h2>
              <h5> I am going to assume you know that AD and 40% CDR are essential on
              Riven, and will typically ignore these stats in my explanations unless
              they are significant. </h5>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/f/f2/Black_Cleaver.png?version=d552f5b58c551a49776470eaa31e7fa9" alt=""/>
              <p> Black Cleaver is an essential item on Riven. I almost always build this
              item first unless I'm going for an Essence Reaver or Lethality based build.
              The health and passive this item gives is massively overlooked; Riven has
              relatively low base health and armor compared to other top laners, so
              the extra health really helps. She has 2422 HP at level 18 with just
              the health from item. In addition, the passive is borderline broken on
              Riven. She can perfectly proc all 6 stacks of Black Cleaver almost
              instantly with a Broken Wings (Q) combo, essentially negating 24% of the
              target's TOTAL armor permanently. and the movement speed lets you
              stick to running enemies while combo-ing them. Build this item.</p>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/ce/Essence_Reaver.png?version=3d3b2ef381b85288fe15b1621bfd628f" alt=""/>
              <p> Essence Reaver might seem like an odd choice for a first item, but
              gives Riven the ability to melt champions in the right matchups. Compared
              to Black Cleaver, this item grants nearly double the amount of AD, and
              also the ability to critically strike enemies 25% of the time. 25% critical
              chance might not seem very high on paper, but if you recognize that Riven
              can quickly get 3 autoattacks off per Broken Wings (Q) combo, you'll see
              that the chance of Riven getting at least one critical strike off per
              combo is a whopping 58%! In addition, her passive can crit, leading
              to huge burst damage if you're lucky enough. Unfortunately,
              the mana restoration passive is wasted, but this can be overlooked
              pretty easily. Feel free to try this against squishy champions like
              Kayle; you'll absolutely destroy them. However, never go this build
              against tanks unless you're able to wrap up the game early, or are
              confident in your ability to push an advantage. You also explode
              like a firework if you rush this item. Don't say I didn't warn you. </p>
              <p> Chance of at least 1 critical strike from 3 autoattacks (Binomial Distribution) </p>
              <img className="mathBorder" src={critMath} alt="" />
              <h2> Death's Dance </h2>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/1/11/Death%27s_Dance.png/180px-Death%27s_Dance.png?version=b4ba4c412de18e66e001bcf457ac8175" alt=""/>
              <p> You <i>will</i> be building Death's Dance as your second item. The only
              exceptions to this would be if you are absolutely dominating, or
              building glass-cannon Riven. In these cases, you might consider Youmuu's
              Ghostblade as your second item, but in any other case, you will be
              building Death's Dance. That is just how essential this item is on Riven.
              Besides granting some helpful armor and magic resistance, the passive of
              this item allows Riven to heal from inflicting ANY kind of damage, whether
              it be in the form of autoattacks or abilities. Since Riven can quickly
              chain together autoattacks and abilities, she can heavily abuse this
              passive. In addition, by having Death's Dance convert 30% of all
              damage you take into bleed damage, you effectively become tankier, since
              you don't immediately take as much damage as you would without this item.
              In the past, Riven's Valor (E) shield was on such a low cooldown that
              you could essentially tank all the bleed damage with your shield, making
              her an unkillable monster. However, with the nerfs to her shield cooldown,
              she isn't able to do this anymore. Thus, having some extra health (e.g. from
              Black Cleaver) is extremely useful so you don't just bleed to death. This is
              also the reason why I do not suggest building Death's Dance first; you will
              not have enough CDR or health to negate bleed damage effectively.
              </p>
              <h5> Funnily enough, you are effectively done with your core build at this point.
              Any items you purchase from this point forward are situational. </h5>
              <h2> Items to Consider </h2>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/d/da/Guardian_Angel.png?version=b4253321f11d67ce710bdf842208dbde" alt=""/>
              <p> Guardian Angel will always be a solid purchase; it gives you an extra
              life, which allows you to engage without fear if you're the main initiator
              on your team. It also builds out of Stopwatch, which is extremely useful.
              Just remember that it revives you with 50% of your BASE health, so you
              will probably come back to life with about 30% of your TOTAL health in
              most cases. If you have Spirit Visage built for some reason, you'll
              restore up to 65% BASE health instead. Also, don't use Quicksilver Sash
              while you are reviving. Yes, you can use it while in stasis, and yes,
              you'll waste it like a clown. </p>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/a/a5/Sterak%27s_Gage.png?version=658731989646c2fbf86d039b6cb3b271" alt=""/>
              <p> Sterak's Gage is an item I really like, but I don't find myself
              building very often due to the need to build other situational items.
              It grants 450 health, which will make Riven extremely tanky with 2872 HP
              and a 637.5 HP Lifeline shield at level 18 if built alongside Black
              Cleaver. Also, it grants 50% of your BASE AD as BONUS AD, which is
              nothing to snuff at either (57.5 AD at level 18; more than Death's Dance).
              Some players overlook the increased size and 30% tenacity this item grants
              when Lifeline is triggered; if you have Blade of the Exile (R) active
              alongside the size bonus, your sword will be as long as Sephiroth, making
              you extremely disruptive in a teamfight.
              </p>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/5/5b/Lord_Dominik%27s_Regards.png/180px-Lord_Dominik%27s_Regards.png?version=bff64d392a1406584f3046677095e71a" alt=""/>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/1/1d/Mortal_Reminder.png/180px-Mortal_Reminder.png?version=b1178a775ebc78ef5161cff6e25525bd" alt=""/>
              <p> Lord Dominik's Regards if you really need the extra 10% total armor
              penetration (i.g. against Malphite), otherwise get Mortal Reminder. You
              will be able to easily inflict Grievous Wounds on everyone in a teamfight
              with your abilities. I see myself building these items very often,
              as tanks love stacking armor in the form of Ninja Tabi and Thornmail
              to combat excessive lifesteal; ironically, tanks themselves also have
              lots of self-sustain these days (Dr. Mundo, Volibear), making Mortal
              Reminder better against them.
              </p>
              <p> Unfortunately, these two items stack poorly with Black Cleaver's
              armor shredding capabilities. I haven't run the exact numbers myself,
              but it would be wise to sit on Last Whisper or Executioner's Calling
              for awhile if the enemy team is not stacking excessive amounts of armor. </p>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/2/21/Mercurial_Scimitar.png?version=eeec224061fee42d358d02767f27acb9" alt=""/>
              <p> Mercurial Scimitar needs no explanation. If the enemy team has a lot
              of crowd-control abilities, build Quicksilver Sash, and finish this
              item last in your build if you keep it. You really don't need the extra
              1 second of movement speed the full item gives, and other fully completed
              items provide better stats.
              </p>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/c/c6/Maw_of_Malmortius.png?version=190ca784657cee4fde91fa3e85fbf702" alt=""/>
              <p> Maw of Malmortius is great against AP champions top lane, such as
              Rumble and Ryze. It grants a MASSIVE amount of magic resistance (50),
              only 5 less than the best magic resistance items in the game. It also
              gives Riven a fat 350 magic damage shield, 20 AD, 10% spell vamp, and
              10% lifesteal when Lifeline is activated. Unfortunately, you might
              go over the CDR cap if you get this item alongside Black Cleaver and
              Death's Dance, but it'll be worthwhile, especially if you have the
              Transcendence rune. Get this item and Death's Dance, and you'll destroy
              all AP top laners. And yes, spell vamp works on your abilities. </p>
              <h1 id={"section3"}> Riven in the Current Meta </h1>
              <p> Riven is not good right now. Allow me to explain, starting with a
              simple visual from the ever popular OP.GG website. </p>
              <div className="leaderDiv">
              <img className="leaderBoards" src={top} alt="" />
              </div>
              <div className="leaderDiv">
              <img className="leaderBoards2" src={bot} alt="" />
              </div>
              <p> Riven is currently 4th from the bottom in terms of top laners.
              How did this happen? What is the difference between her and the
              top tier champions? </p>
              <h3> Blade of the Ruined King (BoRK) </h3>
              <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/5/57/Blade_of_the_Ruined_King.png?version=7b26b3a3608f32689e0ab7f9640998bd" alt=""/>
              <p> A large majority of the best top laners right now can build
              this item. This item makes autoattacks deal 12% of the target's
              current health as bonus physical damage, which is absolutely nuts.
              Basically, any champion that can effectively utilize this item can
              make tanks disappear. Champions that can autoattack very quickly
              can melt anyone in the game with this item, especially if they
              deal true damage (health is the only counter to true damage,
              which this item shreds).
              </p>
              <p> In addition, the active is very useful for chasing down
              opponents. It slows the enemy by 25%, and speeds you up by 25%
              for 3 whole seconds. I've seen plenty of champions use this item
              to initiate a fight.
              </p>
              <h3> Why not just build BoRK on Riven? </h3>
              <p> You could, but why? Riven is an AD caster, which means that
              a large majority of her damage comes from abilities, rather than
              pure autoattacks. As a result, she is not good at abusing the
              12% on-hit bonus this item gives. If you want to abuse BoRK, you
              would play a champion with high attack speed instead, like Jax or Irelia.
              </p>
              <p> In addition, you would explode if you built this item
              first on Riven, as BoRK grants no health or CDR, and only grants
              lifesteal on autoattacks. 12% lifesteal on autoattacks, and a shield (E)
              you can only use every 14 seconds is not going to keep you alive.
              </p>
              <h3> Riven Versus the Top </h3>
              <p> So, how does Riven fare against the top 11 top laners in the
              game right now? Here's a quick rundown about what makes each of
              these champions strong, and if Riven is at a disadvantage (Note:
              being at a disadvantage does not mean Riven can not win against
              these champions in lane):
              </p>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/6/6d/WukongSquare.png?version=5e4ee8ccfeffd3884d82c9f046efd53f" alt=""/>
              <p> Can build BoRK. Stacking armor and health regen from passive,
              nigh permanent armor shred, and two knock-ups from this ultimate.
              This champion is simply broken right now. Riven is at a
              disadvantage.
              </p>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/5/54/DariusSquare.png?version=85b8f660b8095781604324278d5b04f5" alt=""/>
              <p> Can run the Ghost summoner spell alongside Nimbus Cloak.
              Built-in passive armor penetration from his Apprehend (E) that
              scales from 15% - 35%. Has an autoattack reset that slows for 90%
              for 1 second, and refunds its mana cost and 50% of its cooldown on
              minion last hits. His passive makes you literally bleed to death.
              There is a common misconception that Riven can never be caught
              thanks to her seemingly limitless dashes. This guy exists to
              prove that theory wrong. Riven is at a disadvantage.
              </p>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/f/f9/VolibearSquare.png?version=71e6a415bfad9de8e11f8286be493d01" alt=""/>
              <p> Riot's newest reworked champion. Broken. Riven is at a disadvantage.
              </p>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/7/7c/QuinnSquare.png?version=ecb75b1ace6217309f34db8b7ff70857" alt=""/>
              <p> Can build BoRK. Ranged with a blind and knock-back. Riven will
              never be able to land a hit on a skilled Quinn player. Riven is
              at a disadvantage.
              </p>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/6/64/MaokaiSquare.png?version=07f8dd2ca07b069155826955596f0568" alt=""/>
              <p> Maokai has always been decent, and hasn't been nerfed in recent
              times. Buffs to Bami's Cinder and Sunfire Cape has made him a menace
              top lane with those exploding flame novas. His passive is an
              UNSTOPPABLE healing autoattack with a cooldown (30/25/20 seconds based
              on level). However, the cooldown is lowered by 4 seconds every
              time Maokai casts an ability, or is struck by an ability. You can
              probably guess how this would be good against Riven. Has a spammable
              slow/knock-back, and becomes untargetable during his dash. If he
              rushes Bramble Vest, you pretty much lose. Riven is at a disadvantage.
              </p>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/e/ea/GarenSquare.png?version=17b122cf743b1ec93dfbce2f8828c08e" alt=""/>
              <p> Garen can stack Conqueror extremely quickly with his spin,
              and has a silence. If he times Courage (W) correctly, he'll instantly
              break out of any quick trades you attempt on him with your stun, and
              punish you. Riven is at a disadvantage.
              </p>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/d/d2/FioraSquare.png?version=a0fe28ee06f3a53ed9a1e5eb9a9a2364" alt=""/>
              <p> Can build BoRK. Used to be a skill matchup, but recent buffs to
              Fiora have heavily shifted this matchup in her favor. Her ultimate
              grants her movement speed the moment it is cast, and vitals can
              be proc'd using BoRK's active. If she ever hits you with Riposte
              (slow or stun), you will lose the trade. The slow is just as good as
              the stun, as it reduces movement speed AND your attack speed by 50%.
              Riven is at a disadvantage.
              </p>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/1/13/CamilleSquare.png?version=27eaf42bcf0406577a5f792b0631b971" alt=""/>
              <p> Camille is what you wish you could be right now. Another animation
              cancelling AD caster that hasn't been gutted. She can dodge your
              ultimate with her own. Riven is at a disadvantage.
              </p>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/0/0f/JaxSquare.png?version=20cc0e4f3272cef1ce908fedb3ba016b" alt=""/>
              <p> Can build BoRK. Can easily run you down, and has a dodge mechanic
              that allows him to stun you. His ultimate makes him extremely tanky.
              He scales like an absolute monster. Riven is at a disadvantage.
              </p>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/f/fc/RenektonSquare.png?version=6608f6b07c800e22dce3fbe7b77c78f5" alt=""/>
              <p> Can build BoRK. If there was a cookie cutter counter to Riven,
              it would be this guy right here. He absolutely destroys you.
              His empowered stun negates your shield before he strikes you.
              Riven is at a huge disadvantage.
              </p>
              <img className="imgScale" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/7/75/VladimirSquare.png?version=f20cef89030a416dfc44e096f8f6f033" alt=""/>
              <p> You actually destroy this blood sucker in lane, especially
              if you rush Executioner's Calling. So why this guy is top tier?
              The reason is due to his unstoppable late game power. He can
              infinitely sustain himself in lane, is extremely safe, and will
              eventually turn into a 1v5 monster. Riven is at an advantage,
              but needs to wrap up the game as soon as possible.
              </p>
            </Container>
          </Container>
        </Styles>
      );
    }
  }

export default Gaming;
